import React from 'react';
import MaxResources from './MaxResources';
import SkillsCheckBox from './SkillsCheckBOX'
class Recommendations extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <h3>This will take user inputs and will provide best recommendations based on skills etc...</h3>
                <form>
                    <br />
                    
                    <SkillsCheckBox />
                    <br />
                    <MaxResources/>

                </form>
            </div>
        )
    }
}

export default Recommendations;
/*

FROM node:alpine as builder
WORKDIR './app'
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

*/