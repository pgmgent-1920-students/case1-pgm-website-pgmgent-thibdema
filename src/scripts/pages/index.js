import { mainHome } from './home';
import { mainBlog } from './blog';
import { mainBlogDetail } from './blogdetail';
import { mainStudentDetail } from './studentdetail';
import { mainWieZijnWe } from './wiezijnwe';
import { mainStudents } from './students';
import { mainTeachers } from './teachers';
import { mainTeacherDetail } from './teacherdetail';
import { mainWerkplekLeren } from './werkplekleren';

class FunctionRouter {
  HOME() {
    mainHome();
  }

  BLOG() {
    mainBlog();
  }

  BLOGDETAIL(params) {
    mainBlogDetail(params);
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
}

export {
  FunctionRouter
}