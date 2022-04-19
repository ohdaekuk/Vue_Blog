import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import MainContent from './components/MainContent.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

const routes = [
  {
    path: "/list",
    component: List
  },
  {
    path: "/",
    component: MainContent
  },
  {
    path: "/detail/:detail",
    component: Detail,
    // 특정 페이지 안에서 route를 나누고 싶을 때 children 사용
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 