import PropertyList from "../components/properties/PropertyList";
import Conversation from "../components/inbox/Conversation";
const InboxPage = ()=>{

    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                <Conversation/>
            </h1>
        </main>
    )
}

export default InboxPage;