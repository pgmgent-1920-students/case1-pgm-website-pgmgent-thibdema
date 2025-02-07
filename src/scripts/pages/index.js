import { mainHome } from './home';
import { mainBlog } from './blog';
import { mainBlogDetail } from './blogdetail';
import { mainStudentDetail } from './studentdetail';
import { mainWieZijnWe } from './wiezijnwe';
import { mainStudents } from './students';
import { mainTeachers } from './teachers';
import { mainTeacherDetail } from './teacherdetail';
import { mainWerkplekLeren } from './werkplekleren';
import { mainCurriculum } from './curriculum';
import { mainContact } from './contact';
import { mainMentors } from './mentors';
import { mainMentorDetail } from './mentordetail';
import { main404 } from './404';
import { mainOpleidingsinfo } from './opleidingsinfo';
import { mainCases } from './cases';
import { mainCaseDetail } from './casedetail';


class FunctionRouter {
  HOME() {
    mainHome();
  }

  OPLEIDINGSINFO() {
    mainOpleidingsinfo();
  }

  CASES() {
    mainCases();
  }

  CASEDETAIL(params) {
    mainCaseDetail(params);
  }

  CURRICULUM() {
    mainCurriculum();
  }

  BLOG() {
    mainBlog();
  }

  BLOGDETAIL(params) {
    mainBlogDetail(params);
  }

  MENTORS() {
    mainMentors();
  }

  MENTORDETAIL(params) {
    mainMentorDetail(params);
  }

  STUDENTS() {
    mainStudents();
  }

  STUDENTDETAIL(params) {
    mainStudentDetail(params);
  }

  TEACHERS() {
    mainTeachers();
  }

  TEACHERDETAIL(params) {
    mainTeacherDetail(params);
  }

  WIEZIJNWE() {
    mainWieZijnWe();
  }

  WERKPLEKLEREN() {
    mainWerkplekLeren();
  }

  CONTACT() {
    mainContact();
  }

  ERROR404() {
    main404();
  }
}

export {
  FunctionRouter
}