import requests

# API endpoint and parameters
url = "http://api.openweathermap.org/data/2.5/weather"
params = {
    "q": "Melbourne",  # City name
    "appid": "0bffae351f092686f72c75c1322fba45"  # Your API key from openweathermap.org
}

# Send GET request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Print the response content
    print(response.json())
else:
    # Print the error message
    print("Error:", response.text)