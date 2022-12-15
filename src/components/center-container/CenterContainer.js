import { CenterContainerBlock, HighLow, WeatherDesc } from "./CenterContainer.styled"
import Temperature from "./Temperature.styled";

const CenterContainer = ({ todayWeather }) => {
    return (
        <CenterContainerBlock>
            <section>
                <h1>{todayWeather.name}</h1>
                <Temperature>{todayWeather.temp}&deg;</Temperature>
                <WeatherDesc>{todayWeather.weatherDesc}</WeatherDesc>
            </section>
            <HighLow>
                <p>H: {todayWeather.highest}&deg;</p>
                <p>L: {todayWeather.lowest}&deg;</p>
            </HighLow>
        </CenterContainerBlock>
    )
}

export default CenterContainer;