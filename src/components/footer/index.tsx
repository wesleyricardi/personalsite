import style from "../../styles/components/footer/index.module.css";

type Props = {
  footer: {
    copyright: string;
    localization: string;
  };
};

export default function Footer({ footer }: Props) {
  return (
    <footer id="footer" className={style.main}>
      {footer.copyright} - Design by <span>Wesley Ricardi</span>
      <div>{footer.localization}</div>
    </footer>
  );
}
