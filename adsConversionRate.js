/*
The people who buy ads on our network don't have enough data about how ads are working for
their business. They've asked us to find out which ads produce the most purchases on their website.

Our client provided us with a list of user IDs of customers who bought something on a landing page
after clicking one of their ads:

# Each user completed 1 purchase.
completed_purchase_user_ids = [
  "3123122444","234111110", "8321125440", "99911063"]

And our ops team provided us with some raw log data from our ad server showing every time a
user clicked on one of our ads:
ad_clicks = [
 #"IP_Address,Time,Ad_Text",
 "122.121.0.1, 2016-11-03 11:41:19, Buy wool coats for your pets",
 "96.3.199.11, 2016-10-15 20:18:31, 2017 Pet Mittens",
 "122.121.0.250, 2016-11-01 06:13:13, The Best Hollywood Coats",
 "82.1.106.8, 2016-11-12 23:05:14, Buy wool coats for your pets",
 "92.130.6.144, 2017-01-01 03:18:55, Buy wool coats for your pets",
 "92.130.6.145, 2017-01-01 03:18:55, 2017 Pet Mittens",
]

The client also sent over the IP addresses of all their users.

all_user_ips = [
 #"User_ID,IP_Address",
  "2339985511, 122.121.0.155",
 "234111110, 122.121.0.1",
 "3123122444, 92.130.6.145",
 "39471289472,2 001:0db8:ac10:fe01:0000:0000:0000:0000",
 "8321125440, 82.1.106.8",
 "99911063, 92.130.6.144"
]

Write a function to parse this data, determine how many times each ad was clicked,
then return the ad text, that ad's number of clicks, and how many of those ad clicks
were from users who made a purchase.


Expected output:
Bought Clicked Ad Text
1 of 2  2017 Pet Mittens
0 of 1  The Best Hollywood Coats
3 of 3  Buy wool coats for your pets
*/
const parseData = (
    completed_purchase_user_ids,
    ad_clicks,
    all_user_ips
) => {
    // Eventually I want the function to return an
    // array of ads, each of which will look like:
    //   {
    //     bought: (number),
    //     clicked: (number),
    //     text: (string)
    //   }

    // I'll start by parsing the ad_clicks object.
    // It has the data I need to get started, but it's
    // in strings all smooshed together.  So I'll go
    // through that data and create an object, using
    // the text as a key, and counting each click
    const adsByText = {};
    ad_clicks.forEach(ad_click => {
        // For now I only care about the text, which is
        // the third item in the array
        const [ip_address, , text] = ad_click.split(",");

        // If it's a new ad text, add it to the object.
        // I'll go ahead and track the IP addresses
        // here as well.
        if (!(text in adsByText)) {
            adsByText[text] = {
                clicked: 0,
                bought: 0,
                ip_addresses: [],
                text // including this makes the final step easier
            }
        }
        // Finally, increase the click count by one, and
        // add the IP address of the user who clicked it:
        adsByText[text].clicked++;
        adsByText[text].ip_addresses.push(ip_address);
    });
    console.log("create adsByText to parse ad_clicks",adsByText);

    // Next up is the user IPs array, which includes the
    // user ID (which I'll use to identify purchases)
    // and the IP address (which I can use to identify
    // clicks).  I'll create an object of those as well:
    const userIPsById = {};
    all_user_ips.forEach(user_info => {
        const [user_id, ip_address] = user_info.split(", ");
        userIPsById[user_id] = ip_address;
    });
    console.log("create userIPsById to parse all_user_ips",userIPsById)

    // Finally, I can iterate over the completed purchase
    // user IDs, use the user hashmap I just made to look
    // up the IP address, and use the IP address to look
    // up which ad led to the purchase.
    
    completed_purchase_user_ids.forEach(userId => {
        const userIP = userIPsById[userId];
        const [purchasedItem] = Object.values(adsByText)
            .filter((data) =>
                // data.ip_addresses.includes(userIP.trim()) to remove the extra space
                data.ip_addresses.includes(userIP.trim())
                ); // destructuring since .filter returns an array
                // console.log("[purchasedItem]",[purchasedItem])

        // Now I have identified the purchased item, so I
        // can pull the ad text out of it and use it as a key
        // to update the adsByText object from before:
        adsByText[purchasedItem.text].bought++;
    });
    console.log("adsByText after checking with userId made a purchase and incrementing bought from the check",adsByText)

    // At this point, all the information we need is in the
    // adsByText object, but it's got some extraneous information
    // in it too.  I'll tidy that up a little bit, and create
    // a new array to return:
    const output = Object.values(adsByText).map(info => {
        return {
            bought: info.bought,
            clicked: info.clicked,
            ad_text: info.text
        };
    });

    return output;
};
/*
create adsByText to parse ad_clicks {
    ' Buy wool coats for your pets': {
      clicked: 3,
      bought: 0,
      ip_addresses: [ '122.121.0.1', '82.1.106.8', '92.130.6.144' ],
      text: ' Buy wool coats for your pets'
    },
    ' 2017 Pet Mittens': {
      clicked: 2,
      bought: 0,
      ip_addresses: [ '96.3.199.11', '92.130.6.145' ],
      text: ' 2017 Pet Mittens'
    },
    ' The Best Hollywood Coats': {
      clicked: 1,
      bought: 0,
      ip_addresses: [ '122.121.0.250' ],
      text: ' The Best Hollywood Coats'
    }
  }
  create userIPsById to parse all_user_ips {
    '99911063': '92.130.6.144',
    '234111110': '122.121.0.1',
    '2339985511': '122.121.0.155',
    '3123122444': '92.130.6.145',
    '39471289472,2 001:0db8:ac10:fe01:0000:0000:0000:0000': undefined,
    '8321125440': '82.1.106.8'
  }
  adsByText after checking with userId made a purchase and incrementing bought from the check {
    ' Buy wool coats for your pets': {
      clicked: 3,
      bought: 3,
      ip_addresses: [ '122.121.0.1', '82.1.106.8', '92.130.6.144' ],
      text: ' Buy wool coats for your pets'
    },
    ' 2017 Pet Mittens': {
      clicked: 2,
      bought: 1,
      ip_addresses: [ '96.3.199.11', '92.130.6.145' ],
      text: ' 2017 Pet Mittens'
    },
    ' The Best Hollywood Coats': {
      clicked: 1,
      bought: 0,
      ip_addresses: [ '122.121.0.250' ],
      text: ' The Best Hollywood Coats'
    }
  }
  [
    { bought: 3, clicked: 3, ad_text: ' Buy wool coats for your pets' },
    { bought: 1, clicked: 2, ad_text: ' 2017 Pet Mittens' },
    { bought: 0, clicked: 1, ad_text: ' The Best Hollywood Coats' }
  ]

*/

completed_purchase_user_ids = ["3123122444", "234111110", "8321125440", "99911063"];
ad_clicks = [
    // #"IP_Address,Time,Ad_Text",
    "122.121.0.1, 2016-11-03 11:41:19, Buy wool coats for your pets",
    "96.3.199.11, 2016-10-15 20:18:31, 2017 Pet Mittens",
    "122.121.0.250, 2016-11-01 06:13:13, The Best Hollywood Coats",
    "82.1.106.8, 2016-11-12 23:05:14, Buy wool coats for your pets",
    "92.130.6.144, 2017-01-01 03:18:55, Buy wool coats for your pets",
    "92.130.6.145, 2017-01-01 03:18:55, 2017 Pet Mittens",
]

all_user_ips = [
    //     #"User_ID,IP_Address",
    "2339985511, 122.121.0.155",
    "234111110, 122.121.0.1",
    "3123122444, 92.130.6.145",
    "39471289472,2 001:0db8:ac10:fe01:0000:0000:0000:0000",
    "8321125440, 82.1.106.8",
    "99911063, 92.130.6.144"
]
console.log(parseData(completed_purchase_user_ids, ad_clicks, all_user_ips))

// console.log(generateAdResult());


// function generateAdResult() {
//     const allUserIps = all_user_ips.reduce((result, user) => {
//         const [id, ip] = user.split(',');
//         result[ip] = id;
//         return result;
//     }, {});

//     const purchasedUsers = completed_purchase_user_ids.reduce((result, userId) => {
//         result[userId] = true;
//         return result;
//     }, {});

//     const result = ad_clicks.reduce((result, clickInfo) => {
//         const [ip, timestamp, adText] = clickInfo.split(',');
//         const userId = allUserIps[ip];
//         Object.hasOwn(result, adText)
//             ? result[adText].clicked += 1
//             : result[adText] = {
//                 purchased: 0,
//                 clicked: 1,
//             };
//         purchasedUsers[userId] && result[adText].purchased++;
//         return result;
//     }, {});

//     console.log('Bought Clicked Ad Text');
//     Object.keys(result).forEach(adText => {
//         const { purchased, clicked } = result[adText];
//         console.log(`${purchased} of ${clicked} ${adText}`);
//     });
// }