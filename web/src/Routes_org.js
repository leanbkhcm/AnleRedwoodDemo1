// web/src/Routes.js
// <Route path="/" page={HomePage} name="home" />

import { Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
    <Route path="/" page={StartPage} name="start" />
    
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
       
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
