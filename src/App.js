import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";

//ユーザーのデータを作成
const user = {
  name: "マッカート",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "株式会社macart"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
