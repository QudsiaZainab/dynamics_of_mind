import React from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  redirect,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StudentLayout from "./components/Layouts/Student";
import TeacherLayout from "./components/Layouts/Teacher";
import PatientLayout from "./components/Layouts/Patient";
import DoctorLayout from "./components/Layouts/Doctor";
import StudentDashboard from "./pages/student/Dashboard";
import EnrollNow from "./pages/student/Enroll";
import TeacherDashboard from "./pages/teacher/Dashboard";
import CourseDescription from "./pages/teacher/Course";
import CourseTaught from './pages/teacher/Coursestaught';
import PatientDashboard from "./pages/patient/Dashboard";
import Home from "./pages/patient/Dashboard/Home";
import DoctorsList from "./pages/patient/Dashboard/DoctorsList"
import BookAppointment from "./pages/patient/Dashboard/BookAppointment"
import BookedAppointment from "./pages/patient/Dashboard/BookedAppointment"
import BookConsultation from "./pages/patient/Dashboard/BookConsultation"
import BookedConsultation from "./pages/patient/Dashboard/BookedConsultation"
import ChangePassword from "./pages/patient/Dashboard/ChangePassword";
import Requestsent from "./pages/patient/Dashboard/Requestssent";
import DoctorDashboard from "./pages/doctor/Dashboard";
import StudentCourses from "./pages/student/Courses";
import DoctorRegistrationPage from "./pages/doctor/Registration";
import DoctorThankYouPage from "./pages/doctor/ThankYou";
import DoctorRejectPage from "./pages/doctor/Reject";
import RequestAppointments from "./pages/doctor/RequestAppointments";
import TeacherThankYouPage from "./pages/teacher/ThankYou";
import CreateCourse from "./pages/teacher/createCourse";
import TeacherRejectPage from "./pages/teacher/Reject";
import TeacherRegistrationPage from "./pages/teacher/Registration";
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./components/Layouts/Admin";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminAccountApproval from "./pages/admin/AccountApproval";
import Cookies from "js-cookie";
import axios from "axios";
import backendHost from "./libs/backendHost";
import Requestssent from "./pages/patient/Dashboard/Requestssent";
import CourseOutline from "./pages/student/Outline";
import CourseCreated from "./pages/teacher/CourseCreated";
import DeletedCourse from "./pages/teacher/Deleted";
import api from "./libs/api";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    loader: () => {
      return redirect("/login");
    },
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: verifyUser,
  },
  {
    path: "student",
    element: <StudentLayout />,
    // loader: verifyUser,
    children: [
      {
        path: "",
        loader: async () => {
          return redirect("dashboard");
        },
      },
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "courses",
        element: <StudentCourses />,
      },
      {
        path: "courses/enroll",
        element: <EnrollNow/>,
      },
      {
        path: "courses/coursedescription",
        element: <CourseOutline/>,
      },
      {
        path: "dashboard/coursedescription",
        element: <CourseOutline/>,
      },
    ],
  },
  {
    path: "teacher",
    element: <TeacherLayout />,
    // loader: verifyUser,
    children: [
      {
        path: "",
        loader: async () => {
          return redirect("dashboard");
        },
      },
      {
        path: "dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "dashboard/createcourse",
        element: <CreateCourse/>,
      },
      {
        path: "dashboard/createcourse/coursecreated",
        element: <CourseCreated/>,
      },
      {
        path: "dashboard/coursedescription",
        element: <CourseDescription/>,
      },
      {
        path: "coursetaught",
        element: <CourseTaught/>,
      },
      {
        path: "dashboard/coursedescription/deleted",
        element: <DeletedCourse/>,
      },
    ],
  },
  {
    path: "teacher/registration",
    element: <TeacherRegistrationPage />,
  },
  {
    path: "teacher/thank-you",
    element: <TeacherThankYouPage />,
  },
  {
    path: "teacher/reject",
    element: <TeacherRejectPage />,
  },
  {
    path: "patient",
    element: <PatientLayout />,
    // loader: verifyUser,
    children: [
      {
        path: "",
        loader: async () => {
          return redirect("dashboard");
        },
      },
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "exploredoctors",
        element: <PatientDashboard />,
      },
      {
        path: "/patient/exploredoctors/doctorsList",
        element: <DoctorsList/>,
      },
      {
        path: "/patient/exploredoctors/doctorsList/bookappointment",
        element: <BookAppointment/>,
      },
      {
        path: "/patient/exploredoctors/doctorsList/bookappointment/bookedappointment",
        element: <BookedAppointment/>,
      },
      {
        path: "/patient/exploredoctors/doctorsList/bookconsultation",
        element: <BookConsultation/>,
      },
      {
        path: "/patient/exploredoctors/doctorsList/bookconsultation/bookedconsultation",
        element: <BookedConsultation/>,
      },
      {
        path: "/patient/changepassword",
        element: <ChangePassword/>,
      },
      {
        path: "/patient/requestsent",
        element: <Requestssent/>,
      },
      {
        path: "/patient/requestsent/bookedappointment",
        element: <BookedAppointment/>,
      },
    ],
  },
  
  {
    path: "doctor",
    element: <DoctorLayout />,
    // loader: verifyUser,
    children: [
      {
        path: "",
        loader: async ({ request }: LoaderFunctionArgs) => {
          return redirect("dashboard");
        },
      },

      {
        path: "dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "registration",
        element: <DoctorRegistrationPage />,
      },
      {
        path: "thank-you",
        element: <DoctorThankYouPage />,
      },
      {
        path: "reject",
        element: <DoctorRejectPage />,
      },
      {
        path: "appointmentrequests",
        element: <RequestAppointments />,
      },
    ],
  },
  {
    path: "admin/login",
    loader: verifyAdmin,
    element: <AdminLogin />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    loader: verifyAdmin,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "approval/:type", //type will be doctor or teacher
        element: <AdminAccountApproval />,
      },
    ],
  },
]);

export default routes;

async function verifyUser({ request }: LoaderFunctionArgs) {
  console.log(request.url);
  const token = Cookies.get("token");
  if (token) {
    try {
      const verifyUser = await axios.post(
        `${backendHost}/user/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (verifyUser) {
        const { role, status } = verifyUser.data;
        const lowerCaseRole = role.toLowerCase(); // It will be used to match and url 
        if (role === "PATIENT" || role === "STUDENT") {
          if (request.url.includes(lowerCaseRole)) {
            return null;
          } else {
            return redirect(`/${lowerCaseRole}`);
          }
        } else {
          switch (status) {
            case "WAITING":
              if (
                request.url.includes("rejected") ||
                !request.url.includes(lowerCaseRole) ||
                !request.url.includes(`${lowerCaseRole}/thank-you`)
              ) {
                return redirect(`/${lowerCaseRole}/thank-you`);
              } else {
                return null;
              }

            case "APPROVED":
              if (
                request.url.includes("reject") ||
                request.url.includes("thank-you") ||
                !request.url.includes(lowerCaseRole)
              ) {
                return redirect(`/${lowerCaseRole}`);
              } else {
                return null;
              }
            case "REJECTED":
              if (
                !request.url.includes(`${lowerCaseRole}/reject`) ||
                request.url.includes("thank-you") ||
                !request.url.includes(lowerCaseRole)
              ) {
                return redirect(`/${lowerCaseRole}/reject`);
              } else {
                return null;
              }
            default:
              if (request.url.includes("registration")) {
                return null;
              } else {
                return redirect(`/${lowerCaseRole}/registration`);
              }
          }
        }
      } else {
        return request.url.includes("/login") ? null : redirect("/login");
      }
    } catch (err) {
      return request.url.includes("/login") ? null : redirect("/login");
    }
  } else {
    return request.url.includes("/login") ? null : redirect("/login");
  }
}

async function verifyAdmin({ request }: LoaderFunctionArgs) {
  console.log(request.url);
  const token = Cookies.get("token");
  if (token) {
    try {
      const verifyUser = await api.post(`/admin/auth/verify`);
      console.log(verifyUser,request.url)
      if (verifyUser) {
        return request.url.includes("/login") ? redirect("/admin/dashboard") : null;
      } else {
        return request.url.includes("/login") ? null : redirect("/login");
      }
    } catch (err) {
      return request.url.includes("/login") ? null : redirect("/login");
    }
  } else {
    return request.url.includes("/login") ? null : redirect("/login");
  }
}
