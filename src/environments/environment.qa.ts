export const environment = {
  production: false,
  api: 'http://www.behance.net/v2/',
  token: 'tIn2oeG0xiiUVQ5WsUsg9wWHOD1gjFuD',
  routes: [
    { path: '', pathMatch: 'full', redirectTo: 'snaps' },
    { path: 'snaps', loadChildren: './home/home.module#HomeModule' },
    { path: 'snaps/:id', loadChildren: './post/post.module#PostModule' },
  ]
};
