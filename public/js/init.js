const canvas = document.querySelector('.canvas');
for (let i = 0; i < 1999; i++) {
    const texture = document.createElement('div');
    texture.classList.add('box');
    canvas.append(texture);
}