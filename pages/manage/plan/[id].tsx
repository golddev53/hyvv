import { getSession } from "@auth0/nextjs-auth0";

import PlanContent from "../../../components/manage/content/PlanContent";
import ManageRightSidebar from "../../../components/manage/layouts/ManageRightSidebar/ManageRightSidebar";

import Layout from "../../../components/layouts/AppLayout/Layout";

const Plan = () => {
  return (
    <div className="relative flex h-full">
      <PlanContent />
      <ManageRightSidebar />
    </div>
  );
};

export default Plan;

Plan.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/login",
      },
      props: {},
    };
  }

  return {
    props: { hideSideNav: true },
  };
};
