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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createPlan',
    name: 'createPlan',
    component: CreatePlan
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '/PlanViewer',
    name: 'PlanViewer',
    component: PlanViewer
  },
  {
    path: '/PlanViewerExp/:id',
    name: 'PlanViewerExp',
    component: PlanViewerExp
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/ProfileViewer',
    name: 'ProfileViewer',
    component: ProfileViewer
  },
  {
    path: '/EditHike',
    name: 'EditHike',
    component: EditHike
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/Map3dViewer',
    name: 'Map3dViewer',
    component: Map3dViewer
  },
  {
    path: '/HikeViewer',
    name: 'HikeViewer',
    component: HikeViewer
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
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
