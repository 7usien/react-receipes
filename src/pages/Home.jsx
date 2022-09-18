import Popular from '../components/Popular';
import Vaggie from '../components/Vaggie';
import { motion } from 'framer-motion';

export default function Home() {
 return (
  <>
   <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <Vaggie />
    <Popular />
   </motion.div>
  </>
 );
}
