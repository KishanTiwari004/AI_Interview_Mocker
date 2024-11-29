"use client"
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'

function StartInterview({params}) {

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();

    useEffect(()=> {
       GetInterviewDetails();
    }, []);

    // use to get Interview Details by MockId/InterviewId
    const GetInterviewDetails =async ()=>{
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.InterviewId ))

        const jsonMockResp =JSON.parse (result[0].jsonMockResp);
        console.log(jsonMockResp);
        
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);

        
    }

      

  return (
    <div>
      StartInterview
    </div>
  )
}






export default StartInterview
