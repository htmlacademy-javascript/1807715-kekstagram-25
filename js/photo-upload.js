const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.img-upload__start input[type=file]'); // поле ввода, с помощью которого пользователь выбирает изображение;
const preview = document.querySelector('.img__preview'); // картинка, куда мы будем выставлять превью загруженного изображения.

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});

export {preview};
