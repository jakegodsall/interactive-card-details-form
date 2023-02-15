import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    out: {
        opacity: 0,
        x: 400,
        transition: {
            duration: 0.75,
        },
    },
    in: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            delay: 1,
        },
    },
};

const Transition = ({ children, keyValue, styles }) => {
    return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div
                variants={variants}
                animate='in'
                initial='out'
                exit='out'
                key={keyValue}
                className={styles}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
