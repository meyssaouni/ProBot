from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from rasa_core_sdk import Action
from rasa_core_sdk.events import SlotSet

class ActionWeather(Action):
	def name(self):
		return 'action_weather'
	
	def run(self, dispatcher, tracker, domain):
		from apixu.client import ApixuClient
		api_Key = '6b89f2fd6e6f46ddab9144134190908'
		client = ApixuClient(api_Key)

		loc = tracker.get_slot('location')
		current = client.current(q=loc)

		country = current['location']['country']
		city = current['location']['name']
		condition = current['current']['condition']['text']
		temperature_c = current['current']['temp_c']
		humidity = current['current']['humidity']
		wind_mph = current['current']['wind_mph']

		response = """it is currently {} in {} at the moment the temperature is {} degrees,
		the humidity is {} and the wind speed is {} mph""".format(condition,city, temperature_c,humidity,wind_mph)

		dispatcher.utter_message(response)
		return [SlotSet('location',loc)]