import {listCompanies} from '@/utils/api/companies'
import CompanyList from '@/components/organisms/company-list'
import HomeHero from '@/components/organisms/home-hero'

export default async function Home() {
  const companies = await listCompanies()
  
  return (<>
    <HomeHero/>
    <CompanyList companies={companies}/>
    <div className='w-full h-screen'>
      
    </div>
  </>)
}
