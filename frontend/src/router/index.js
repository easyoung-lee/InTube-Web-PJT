import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView";
import InterviewFind from "@/views/InterviewFind";
import AnnouncementPost from "@/views/AnnouncementPost";
import AnnouncementType from "@/components/announcement/AnnouncementType";
import AnnouncementInfo from "@/components/announcement/AnnouncementInfo";
import AnnouncementQuestion from "@/components/announcement/AnnouncementQuestion";
import AnnouncementAlert from "@/components/announcement/AnnouncementAlert";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/interview",
    name: "interview",
    component: InterviewFind,
  },
  {
    path: "/announcement",
    name: "announcement",
    component: AnnouncementPost,
    children: [
      {
        path: "type",
        name: "announcement-type",
        component: AnnouncementType,
      },
      {
        path: "info",
        name: "announcement-info",
        component: AnnouncementInfo,
      },
      {
        path: "question",
        name: "announcement-question",
        component: AnnouncementQuestion,
      },
      {
        path: "alert",
        name: "announcement-alert",
        component: AnnouncementAlert,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
