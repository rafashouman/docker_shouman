export default async function getLocationAndBredcrumbs(route, state, fnSetState) {
  let classBody = '';
  if (route === '/') {
    fnSetState({
      ...state,
      breadcrumbs: 'home',
      location: 'home',
    });
  } else {
    classBody = route.split('/');
    const tempBreads = [...classBody];

    let currClassBody = classBody[0];
    [currClassBody] = classBody;
    fnSetState({
      ...state,
      breadcrumbs: tempBreads,
      location: currClassBody,
    });
  }

  console.log('state fucntion', state);

  return state;
}
