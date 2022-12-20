import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import resumeData from '../../shared/resume.json'
import styles from '../../styles/resume.css'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const resume = (variables) => {
   return (
<div className='max-w-[1440px] justify-center items-center text-center py-2'>
        <div className='flex mx-auto w-fit my-4'>
            <div className='pt-3 pr-5'>
                <Link href="/">
                    <FontAwesomeIcon icon={faBackward}/>
                </Link>
            </div>
            <div>
                <h1 className='text-5xl mr-5'>{resumeData.name}</h1>
            </div>
        </div>
        <div className={styles.imageWrapper}>
            <Image 
                src={resume.image}
                alt={resume.name}
                layout="intrinsic"
                height={400}
                width={400}
            />
        </div>
        <div className='w-10/12 lg:max-w-8/12 mx-auto'>
            <p>{resume.writeup}</p>
        </div>
        <div className='flex justify-center mt-4'>
            <a href='{resume.download}'>
                Download
            </a>
        </div>
    </div>
   )
}
export default resume