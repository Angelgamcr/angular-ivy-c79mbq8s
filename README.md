Complete the Airport Dashboard App

Considerations:

- Use relative paths whenever importing files, absolute paths generate errors.
- There are comments in the apps code hinting the best place to add and where to not add code, so best coding practices are followed.
- If debugging is needed, you can use the console on the down right side of the window
- Use of AI IS NOT ALLOWED and is penalized. You can use official documents, or internet forums.


This app shows a list of flights scheduled for today in the left column, and in the right column shows updates from those flights.

Updates are added when the 'updateTime' attribute of a flight is completed. On the top is a search bar, for finding a flight by ID:

1. The search bar will find a flight by ID and show all its information in an alert() (id, type, destination, people, model).

   - The search will be done when the button is pressed.
   - If there is no matching ID, the message in the alert should be 'Flight not found'.

2. Add these functionalities to the checkbox with the caption 'Only show max capacity flights':

   - When the checkbox is checked, the only flights shown in the left column will be those with an amount of people greater than 175
   - When unchecked, all the flights should be shown

3. On the 'Today Flights' column (left column) should be rendered the list of flights from the start. Data is provided by getFlights() function in src/app/services/flight.simulation.service.ts.

Each flight should be rendered using the component in src/app/components/single-flight/single-flight.component.ts, and the info that will be shown is this:

✈️ Flight <flight_ID>
Type: <flight_type> (if it is entering, use this emoji: 🛬 if not, use this one: 🛫)
Capacity: <flight amount of people> 🚹

3.1 A red 'MAX CAPACITY FLIGHT' text should be shown if the people in the flight is more than 175.
3.2 Add a button with the label 'More Info' that shows an alert() with all the information of the flight (id, type, destination, people, model).

4. On the right column should be shown a message update list:

   - A message is added every time the 'updateTime' attribute of a flight is completed in seconds. The timer starts since each flight is rendered on the left column (from the start).

   For example, if a flight has a updateTime = 6, it should add a message in the right column after 6 seconds have passed since the App startup.

   This is how a flight object looks like:

   {
   id: 'FL002',
   type: 'leaving',
   destination: 'Mexico',
   people: 150,
   model: 'Airbus A320',
   updateTime: 6,
   }

   - When the first update is added, before should be added a message with the text: "Starting with the first flight of the day! ☀️"
   - When the last update is added, after should be added a message with the text: "This was the last flight of the day! 🌙"
   - When a message is added by a flight, the text should be: 'The flight <ID> landed or took of.'

