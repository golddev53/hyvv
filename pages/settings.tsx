import Head from "next/head";

import { getSession } from "@auth0/nextjs-auth0";

import { useState } from "react";
import Layout from "../components/layouts/AppLayout/Layout";
import SettingMain from "../components/settings/layouts/SettingsMain";
import SettingsSidebar from "../components/settings/layouts/SettingsSidebar";
const Setting = () => {
  const [currentPage, setCurrentPage] = useState("Account");

  return (
    <>
      <Head>
        <title>HYVV | Settings</title>
        <meta
          name="Welcome to HYVV, The Strtup Operating System"
          content="Startups, Start Here"
        />
      </Head>
      <div className="flex h-full">
        <div className="w-[300px] min-w-[300px] border-r">
          <SettingsSidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="flex-1 overflow-y-auto bg-[#fafafa] p-6">
          <SettingMain content={currentPage} />
        </div>
      </div>
    </>
  );
};

export default Setting;

Setting.getLayout = (page) => {
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
