import { AnimatePresence, motion } from 'framer-motion';

const Navigation = ({ mobileNav, setMobileNav }) => {
  if (mobileNav === undefined || !mobileNav) {
    return (
      <ul>
        <li>
          <a href='#features'>features</a>
        </li>
        <li>
          <a href='#extensions'>extensions</a>
        </li>
        <li>
          <a href='#faq'>faq</a>
        </li>
        {mobileNav && (
          <li>
            <a href='#'>login</a>
          </li>
        )}
      </ul>
    );
  }

  return (
    <AnimatePresence>
      <motion.ul
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 1, ease: [0.4, 0.01, 0.165, 0.99] }}
      >
        <li>
          <a href='#features' onClick={() => setMobileNav(false)}>
            features
          </a>
        </li>
        <li>
          <a href='#extensions' onClick={() => setMobileNav(false)}>
            extensions
          </a>
        </li>
        <li>
          <a href='#faq' onClick={() => setMobileNav(false)}>
            faq
          </a>
        </li>
        {mobileNav && (
          <li>
            <a href='#' onClick={() => setMobileNav(false)}>
              login
            </a>
          </li>
        )}
      </motion.ul>
    </AnimatePresence>
  );
};

export default Navigation;
