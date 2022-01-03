import Image from 'next/image';
import { Flex,Box,Text,Button } from '@chakra-ui/layout';
import Link from 'next/link';
const Banner =({purpose,title1,title2,desc1,desc2,linkName,buttonText,imageUrl}) => {
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
   <Image src={imageUrl} width={500} height={300} alt="banner"/>
   <Box p="5">
     <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
     <Text color="3xl" fontSize="bold" >{title1}{title2}</Text>
     <Text color="gray.500" paddingTop="3" paddingBottom="3" color="gray.700">
       {desc1}
       <br>{desc2}</br>
     </Text>
     <Button fontSize="x1" bg="blue.300" color="white">
       <Link hrfe={linkName}>
         {buttonText}
       </Link>
     </Button>

   </Box>

  </Flex>
}

export default function Home() {
  return(
    <div>
      <h1>
        Hello world</h1>
        <Banner
         purpose="Rent a Home"
         title1="Rental Homes for"
         title2="Everyone"
         desc1="Explore Apartment,Villas,Homes"
         desc2="and more"
         buttonText="Explore Renting"
         linkName="/search?purpose=forrent"
         imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'

         />

        <Banner purpose={'for rent'}
        
        />

      </div>
  )
}