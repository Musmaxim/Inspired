export const Contacts = ({ s }) => {
  return (
    <div className={s.contacts}>
      <a className={s.link} href="mailto:inspired@gmail.com">
        Inspired@gmail.com
      </a>
      <a className={s.link} href="tel:89304902620">
        8 930 490 26 20
      </a>
    </div>
  );
};
