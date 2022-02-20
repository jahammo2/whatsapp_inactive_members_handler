export default function (file) {
  return new Promise(resolve => {
    if (!file) resolve({});

    const reader = new FileReader();

    reader.onload = ({ target: { result } }) => {
      return resolve({ io : result });
    };

    reader.readAsDataURL(file);
  });
}
