const routes = {
  home: '/',
  following: '/following',
  profile: '/:nickname', //lỗi ở đây sau khi xoá @ ở /@: thì đã hoạt động.
  upload: '/upload',
  search: '/search',
};

export default routes;
