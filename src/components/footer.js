import React from 'react'
import Event from '../components/AnalyticsEvents'

export default () => (
    <div className="footer">
        <a onClick={ ()=> Event("Home - Phone") } href="tel: 15197090562">(519) 709-0562</a>
        <a onClick={ ()=> Event("Home - Email") } href="mailto: rick@auana.ca">Rick@Auana.ca</a>
    </div>
)