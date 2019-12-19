function gramophone(band, album, song) {
    const fullRotation = 2.5; //full rotation of the plate in seconds
    let songDuration = (album.length * band.length) * song.length / 2;
    let rotations = songDuration / fullRotation;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');