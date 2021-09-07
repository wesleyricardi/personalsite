import style from "../../styles/components/nav/index.module.css";

export default function nav() {
  return (
    <nav className={style.main}>
      <div>
        <img src="/menu_bt.svg" alt="" />
        <img src="/social_imgs/linkedin.png" alt="" />
        <img src="/social_imgs/github_white.png" alt="" />
      </div>
    </nav>
  );
}
