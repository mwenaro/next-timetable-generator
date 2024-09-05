'use client'
import React, { useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import Timetable from '@/components/Timetable';
import useSWR from 'swr'
import { PrimaryButton } from './courses/PrimaryButton';


export default function Page() {
  // const [tableData, setTableData] = useState<any>(null)
  const fetcher = async(url:string)=>{
    try {
      return await (await fetch(url)).json()
    } catch (error) {
      throw error
    }
  }
  const {isLoading, error, data} = useSWR('/api/timetable', fetcher)
  console.log({isLoading, data, error})
  const timetableRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => timetableRef.current,
    documentTitle: 'Timetable',
  });

  if(isLoading) return  <h2>Loading .....</h2>
  if(!isLoading && !data?.data) return  <h2>No Data Found</h2>
  return (
    <div className="w-full min-h-screen bg-slate-200/0.50 p-8 text-black">
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">School Timetable</h1>
        <PrimaryButton
          onClick={handlePrint}
          className=""
        >
          Print Timetable
        </PrimaryButton>
      </div>
      <div ref={timetableRef}>
       { data ? <Timetable tableData={data.data} /> : ''}
      </div>
    </div>
  );
};