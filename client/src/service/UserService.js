import $api from "../http";

const fetchUsers = () => {
  return $api.get("user/users");
};

export { fetchUsers };
