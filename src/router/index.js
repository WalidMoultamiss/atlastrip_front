import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Settings from '../views/Settings.vue'
import PlanViewer from '../views/PlanViewer.vue'
import HikeViewer from '../views/HikeViewer.vue'
import Map3dViewer from '../views/Map3dViewer.vue'
import Create from '../views/Create.vue'
import EditHike from '../views/EditHike.vue'
import ProfileViewer from '../views/ProfileViewer.vue'
import EditProfile from '../views/EditProfile.vue'
import CreatePlan from '../views/Create/CreatePlan.vue'
import Experiences from '../views/Experiences.vue'
import PlanViewerExp from '../views/PlanViewerExp.vue'

const isAuthenticated = async () => {
  // let role = null;
  let Authenticated = null;
  const token = localStorage.getItem('token') || false;
  if (!token) {
      Authenticated = false
  }else{
    
let token = "bearer" + " " + localStorage.getItem("token");
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("authorization", token);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};


fetch("http://localhost/Atlastrip_Backend/user/Token", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.error == "true"){
      Authenticated = false
      console.log(result);
    }else{Authenticated = true}
  })
  .catch(error => console.log('error', error));
    
  }

  return Authenticated
}




const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/createPlan',
    name: 'createPlan',
    component: CreatePlan
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/PlanViewer',
    name: 'PlanViewer',
    component: PlanViewer
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/PlanViewerExp/:id',
    name: 'PlanViewerExp',
    component: PlanViewerExp
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    component: EditProfile
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/ProfileViewer',
    name: 'ProfileViewer',
    component: ProfileViewer
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/EditHike',
    name: 'EditHike',
    component: EditHike
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/Map3dViewer',
    name: 'Map3dViewer',
    component: Map3dViewer
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/HikeViewer',
    name: 'HikeViewer',
    component: HikeViewer
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
    ,async beforeEnter(to, from, next){
      if ( await isAuthenticated()==false) {
        console.log('logged out');
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
