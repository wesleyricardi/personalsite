import style from "../../styles/components/nav/index.module.css";

type Props = {
  nav: {
    menu: { link: string; section: string }[];
    linkedin: string;
    github: string;
  };
};

export default function nav({ nav }: Props) {
  function handleMenu() {
    const Menu = document.getElementById("main_menu") as HTMLElement;
    const menuIcon = document.getElementById("main_menu_icon") as HTMLElement;
    if (Menu.style.display === "none") {
      Menu.style.display = "grid";
      menuIcon.style.transform = "rotate(180deg)";
      setTimeout(() => menuIcon.setAttribute("src", "/bt_close.svg"), 150);
      setTimeout(() => (Menu.style.opacity = "1"), 10);
    } else {
      Menu.style.opacity = "0";
      menuIcon.style.transform = "rotate(0)";
      setTimeout(() => menuIcon.setAttribute("src", "/menu_bt.svg"), 150);
      setTimeout(() => (Menu.style.display = "none"), 300);
    }
  }

  return (
    <nav className={style.main}>
      <div>
        <img
          onClick={handleMenu}
          id="main_menu_icon"
          src="/menu_bt.svg"
          alt=""
        />
        <a href={nav.linkedin}>
          <img width="25px" src="/social_imgs/linkedin_white.svg" alt="" />
        </a>

        <a href={nav.github}>
          <img width="25px" src="/social_imgs/github_white.svg" alt="" />
        </a>
      </div>
      <div id="main_menu" style={{ display: "none", opacity: "0" }}>
        <ul onClick={handleMenu}>
          {nav.menu.map((link, index) => (
            <a key={"menu_link_" + index} href={link.link}>
              <li>{link.section}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}
