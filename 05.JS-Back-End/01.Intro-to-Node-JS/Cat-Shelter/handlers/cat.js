const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');
const mv = require('mv');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === "/cats/add-cat" && req.method === "GET") {
        fs.readFile(`./views/addCat.html`, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write("An error was encountered!");
                res.end();
                return;
            }

            let catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(modifiedData);
            res.end();

        });
    } else if (pathname === "/cats/add-breed" && req.method === "GET") {
        fs.readFile(`./views/addBreed.html`, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write("An error was encountered!");
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (pathname === "/cats/add-cat" && req.method === "POST") {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            let oldPath = files.upload.path;
            let newPath = __dirname.slice(0, __dirname.length - 8) + 'content\\images\\' + files.upload.name;

            mv(oldPath, newPath, err => {
                if (err) throw err;
            });

            let newCat = fields;
            newCat.image = files.upload.name;
            newCat.id = cats.length + 1;

            cats.push(newCat);
            fs.writeFile('./data/cats.json', JSON.stringify(cats), () => {
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end();
            });
        });
    } else if (pathname === "/cats/add-breed" && req.method === "POST") {
        let newBreed = '';

        req.on('data', data => {
            newBreed += data;
        });

        req.on('end', () => {
            newBreed = qs.parse(newBreed).breed;

            let currBreeds = breeds;
            currBreeds.push(newBreed);
            currBreeds = JSON.stringify(currBreeds);

            fs.writeFile('./data/breeds.json', currBreeds, () => {
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end();
            });
        });
    } else if (pathname.includes("/cats-edit/") && req.method === "GET") {
        fs.readFile(`./views/editCat.html`, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write("An error was encountered!");
                res.end();
                return;
            }

            let id = pathname.split('/')[2];
            let catData = cats.filter(cat => cat.id == id)[0];

            let modifiedData = data.toString()
                .replace('{{id}}', catData.id)
                .replace('{{name}}', catData.name)
                .replace('{{description}}', catData.description);

            const breedsAsOptions = breeds.map(b => {
                if (b === catData.breed) {
                    return `<option value="${b}" selected>${b}</option>`;
                } else {
                    return `<option value="${b}">${b}</option>`;
                }
            });
            modifiedData = modifiedData
                .replace('{{catBreeds}}', breedsAsOptions.join('/'));

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(modifiedData);
            res.end();
        });
    } else if (pathname.includes("/cats-edit/") && req.method === "POST") {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            let id = pathname.split("/")[2];
            let catToEdit = cats.filter(cat => cat.id == id)[0];

            catToEdit.name = fields.name;
            catToEdit.description = fields.description;
            catToEdit.breed = fields.breed;

            if (files.image.name !== '') {
                let oldPath = files.image.path;
                let newPath = __dirname.slice(0, __dirname.length - 8) + 'content\\images\\' + files.image.name;

                mv(oldPath, newPath, err => {
                    if (err) throw err;
                });

                catToEdit.image = files.image.name;
            }

            let index = cats.findIndex(el => el.id === catToEdit.id);
            cats[index] = catToEdit;

            fs.writeFile('./data/cats.json', JSON.stringify(cats), () => {
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end();
            });
        });
    } else if (pathname.includes("/cats-new-home/") && req.method === "GET") {
        fs.readFile(`./views/catShelter.html`, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write("An error was encountered!");
                res.end();
                return;
            }
            let id = pathname.split('/')[2];
            let catData = cats.filter(cat => cat.id == id)[0];

            let modifiedData = data.toString()
                .replace('{{id}}', catData.id)
                .replace('{{name}}', catData.name)
                .replace('{{description}}', catData.description)
                .replace('{{image}}', path.join('../content/images/' + catData.image))
                .replace('{{breed}}', catData.breed)
                .replace('{{breed}}', catData.breed);

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(modifiedData);
            res.end();
        });
    } else if (pathname.includes("/cats-new-home/") && req.method === "POST") {
        let catID = pathname.split("/")[2];

        let index = cats.findIndex(el => el.id == catID);
        cats.splice(index, 1);

        fs.writeFile('./data/cats.json', JSON.stringify(cats), () => {
            res.writeHead(301, {
                'Location': '/'
            });
            res.end();
        });
    } else if (pathname === "/search" && req.method === "POST") {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields) => {
            if (err) throw err;

            fs.readFile("./views/home/index.html", (err, data) => {
                if (err) throw err;

                let filteredCats = cats.filter(el => el.name.toLowerCase().includes(fields.search.toLowerCase()));
               
                let modifiedCats = filteredCats.map(cat => `<li>
                    <img src="${path.join('./content/images/' + decodeURI(cat.image))}" alt="cat">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/cats-new-home/${cat.id}">New Home</a></li>
                    </ul>
                    </li>`);
                let modifiedData = data.toString().replace('{{cats}}', modifiedCats);
                res.write(modifiedData);
                res.end();
            });
        });
    } else {
        return true;
    }
};