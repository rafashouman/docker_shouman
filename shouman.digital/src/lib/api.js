async function fetchAPI(params = 1) {
  const url = `https://picsum.photos/v2/list?page=${params}&limit=12`;

  const res = await fetch(url);
  const json = await res.json();

  // error handling work
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
}

async function fetchAPIStrapi(id = null, urlStrapi) {
  let tempURL = urlStrapi;

  if (id) tempURL = `${tempURL}/${id}`;
  const res = await fetch(tempURL);
  const json = await res.json();

  // error handling work
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
}

export async function isMobile() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }

  return false;
}

// Notice the 'export' keyword here. We'll be calling this function
// directly in our blog/index.js page, so it needs to be exported
export async function getPicsumImages(page) {
  const data = await fetchAPI(page);
  return data;
}

export async function getPost(postType, slug) {
  const data = await fetchAPI(postType, `slug=${slug}`);
  return data;
}

export async function getStrapi(id, urlStrapi) {
  const data = await fetchAPIStrapi(id, urlStrapi);
  return data;
}
