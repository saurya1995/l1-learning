import tw from "twin.macro";


export const ContentContainer = tw.div`relative max-w-screen-lg p-4 lg:px-0 mx-auto w-full`
export const InsightContainer = tw.div`flex items-center justify-center bg-white shadow-2xl mt-12 rounded-3xl relative max-w-screen-lg p-4 lg:px-0 mx-auto w-full`
export const VerticalContainer = tw(ContentContainer)`flex flex-col justify-around items-center`
export const HorizontalContainer = tw(ContentContainer)`flex flex-row justify-around items-center`

export const NavbarPadding = tw.div`w-full h-28 m-auto`

export const Title = tw.div`my-4 font-bold text-6xl text-center`;
export const SubTitle = tw.div`my-4 font-bold text-4xl md:text-5xl text-center`;
export const Heading = tw.h1`mt-2 mb-4 text-3xl lg:text-4xl tracking-wide`;
export const SubHeading = tw.h2`my-2 text-xl lg:text-2xl font-semibold`;
export const Text = tw.p`my-4 lg:text-lg font-medium leading-relaxed`;