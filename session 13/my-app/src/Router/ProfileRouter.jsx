import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProfile from "../Screens/profile/EditProfile";
import Orders from "../Screens/profile/Orders";
import Settings from "../Screens/profile/Settings";
import Profile from "../Screens/profile/Profile";
import ProfileSideBar from "../components/ProfileSideBar";
import { useRouteMatch } from "react-router-dom";

const ProfileRouter = () => {
  let match = useRouteMatch();

  return (
    // /profile
    <div>
      <ProfileSideBar />

      <Switch>
        <Route exact path={`${match.path}/`}>
          <Profile />
        </Route>
        <Route path={`${match.path}/orders`}>
          <Orders />
        </Route>
        <Route path={`${match.path}/settings`}>
          <Settings />
        </Route>
        <Route path={`${match.path}/edit`}>
          <EditProfile />
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileRouter;
