import { https, httpsApp } from "./urlConfig";
export const pointService = {
  getSubjects: (params) => {
    let uri = "/subjects/";
    return https.get(uri, { params });
  },
  getGrade: (params) => {
    let uri = "/grades/";
    return https.get(uri, { params });
  },
  postGrade: (params) => {
    let uri = "/grades/";
    return httpsApp.post(uri, { params });
  },
  getSubject: (params) => {
    let uri = "/subjects/";
    return https.get(uri, { params });
  },
  getForumComments: (params) => {
    let uri = "/forum-comments/";
    return https.get(uri, { params });
  },
  getForumPost: (params) => {
    let uri = "/forum-posts/";
    return https.get(uri, { params });
  },
  postForumPost: (params) => {
    let uri = "/forum-posts/";
    return https.post(uri, { params });
  },
  postForumComments: (params) => {
    let uri = "/forum-comments/";
    return https.post(uri, { params });
  },
};
