import {BAASURL} from './config';

// Get data objects from url via fetch API
export const getDATA = async (url) => {
  const content = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return content;
}

// Post data objects to url via fetch API
export const postDATA = async (url, obj) => {
  const content = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    
  return content;
}

export const studentsDATA = async () => {
  const data = await getDATA(`${BAASURL}students.json`);
  return addID(data);
};

export const teachersDATA = async () => {
  const data = await getDATA(`${BAASURL}teachers.json`);
  return addID(data);
};

export const coursesDATA = async () => {
  return await getDATA(`${BAASURL}courses.json`);
};

export const socialMediaDATA = async () => {
  return await getDATA(`${BAASURL}social-media.json`);
};

export const navigationDATA = async () => {
  return await getDATA(`${BAASURL}navigation.json`);
};

export const blogPostsDATA = async () => {
  const data = await getDATA(`${BAASURL}blogposts.json`);
  return addID(data);
};

export const werkpleklerenDATA = async () => {
  const data = await getDATA(`${BAASURL}werkplekleren.json`);
  return addID(data);
};

export const technologiesDATA = async () => {
  const data = await getDATA(`${BAASURL}technologies.json`);
  return addID(data);
};

export const bannersDATA = async () => {
  return await getDATA(`${BAASURL}banners.json`);
};

export const mentorsDATA = async () => {
  const data = await getDATA(`${BAASURL}mentors.json`);
  return addID(data);
};

const addID = (arr) => {
  arr = arr.map((x, i) => {
    x.id = i;
    return x;
  });
  return arr;
};