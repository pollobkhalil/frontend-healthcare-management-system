import { QueryClient } from "@tanstack/react-query"


const ConsultationPage = async () => {

const queryClient = new QueryClient()

  await queryClient
    .query({
      queryKey: ['doctors'],
      queryFn: getDoctors,
    })

  return (
    <div>ConsultationPage</div>
  )
}

export default ConsultationPage