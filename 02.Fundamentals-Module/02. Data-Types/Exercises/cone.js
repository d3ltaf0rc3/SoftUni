function cone(radius, height) {
    let volume = Math.PI / 3 * Math.pow(radius, 2) * height;
    let slant = Math.pow(height, 2) + Math.pow(radius, 2);
    let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * Math.sqrt(slant);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);