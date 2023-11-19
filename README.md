                        Task - Cat search

Create the front-end part of the application for searching information about a
cat by its breed.

- Use the public The Cat API https://thecatapi.com/. To get started, you need to
  register and get a unique access key to attach to each request. It is
  recommended to use axios and add a header to all requests.

- An HTTP request to the rock collection must be made when the page is loaded.
  For this, it is necessary to perform a GET request to the resource
  https://api.thecatapi.com/v1/breeds, which returns an array of objects. In the
  case of a successful request, it is necessary to fill select.breed-select with
  options so that the value of the option contains the id of the breed, and the
  name of the breed is displayed to the user in the interface.

- When the user chooses an option in the selection, it is necessary to perform a
  request for complete information about the cat on the resource. Write the
  fetchCatByBreed(breedId) function, which expects the breed identifier, makes
  an HTTP request and returns a promise with data about the cat - the result of
  the request. If the request was successful, an image and detailed information
  about the cat appear under the selection in the div.cat-info block: breed
  name, description and temperament.

                        Interface

- Add minimal design of interface elements.
- Instead of select.breed-select, you can use any library with beautiful
  selects, for example https://slimselectjs.com/
- Instead of p.loader, you can use any library with beautiful CSS loaders, for
  example https://cssloaders.github.io/
- Instead of the p.error loader, you can use any library with good
  notifications, such as iziToast
