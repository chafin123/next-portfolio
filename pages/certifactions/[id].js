import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import certifactions from '../../shared/certifactions.json'
import styles from '../../styles/[id].module.css'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export const getStaticPaths = async () => {
    const data =  certifactions.certifactions;

    const paths = data.map(path => {
        return {
            params: {id: path.id.toString()}
        }
    })
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = (context) => {
    const id = context.params.id;
    const data = certifactions.certifactions.filter(item => id.includes(item.id))
    return {
        props: {certifactions: data[0]}
    }
}

const Certifaction = ({certifactions}) => {
   if(certifactions) return ( 
    <div className='max-w-[1440px] justify-center items-center text-center py-2'>
        <div className='flex mx-auto w-fit my-4'>
            <div className='pt-3 pr-5'>
                <Link href="/">
                    <FontAwesomeIcon icon={faBackward}/>
                </Link>
            </div>
            <div>
                <h1 className='text-5xl mr-5'>{certifactions.name}</h1>
            </div>
        </div>
        <div className={styles.imageWrapper}>
            <Image 
                src={certifactions.image}
                alt={certifactions.name}
                layout="intrinsic"
                height={800}
                width={800}
            />
        </div> 
    </div>
   )
}
export default Certifaction

