import { UserLayout } from "../components/UserLayout"
import { AppContainer } from "../components/ItemContainer/ItemContainer"

export const Home = () => {
    return(
        <UserLayout>
            <main>
                <AppContainer />
            </main>
        </UserLayout>
    )
}