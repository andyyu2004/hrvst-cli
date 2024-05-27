#!/bin/bash

# Function to check if a date is a weekend (Saturday or Sunday)
is_weekend() {
  weekday_num=$(date --date="$1" +%w)
  if [[ $weekday_num -eq 0 || $weekday_num -eq 6 ]]; then
    return 0  # True (weekend)
  else
    return 1  # False (weekday)
  fi
}

# Get start and end dates from positional arguments with validation
if [[ $# -ne 2 ]]; then
  echo "Error: Please provide two arguments (start_date end_date) in YYYY-MM-DD format."
  exit 1
fi

start_date="$1"
end_date="$2"

if [[ $(date -d $start_date +%s) -le $(date -d $end_date +%s) ]]; then
  :  # Do nothing
else
  echo "Error: Start date must be less than or equal to end date."
  exit 1
fi

# Loop through dates from start to end (inclusive)
while [[ $(date -d "$start_date" +%s) -le $(date -d "$end_date" +%s) ]]; do
  # Check if it's a weekday and print if so
  if is_weekend "$start_date"; then
    :  # Skip weekends (empty statement)
  else
    echo "$start_date"
  fi
  # Increment date by 1 day
  start_date=$(date --date="$start_date +1 day" +%Y-%m-%d)
done
