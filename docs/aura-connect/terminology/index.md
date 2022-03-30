# Terminology

Aura.Connect introduces specific terminology, which is used throughout this documentation. All of the specific terms are described individually below

## Machine ID

Machine ID is a combination of 6 characters, that is used to uniquly identify a printer. 

Can be found by pressing **Maintenance** -> **Netowrk** -> **Aura.Connect** on the printer's screen

## Connection code

Connection code is a combination of 6 digits, which is provided to a user of Aura.Connect, when creating a connection with a printer. It is used to verify a connection on the printers screen in **Maintenance** -> **Netowrk** -> **Aura.Connect** 

Can be obtained by:
  1. Creating a printer (see [Add new printer](/aura-connect/gui/#add-new-printer))
  2. Updating the connection with an existing printer (see [Additional printer inspector actions](/aura-connect/gui/#additional-printer-inspector-actions))

## Jobs

A **job** or **print job** is an ongoing or [queued](#job-queue) data from a .gcode file attached to a printer in Aura.Connect

Jobs can be in different states, including:

1. Not started
    - Assigned to all print jobs that are currently waiting in the [Job queue](#job-queue) of a printer
2. Printing
    - Set to jobs that are currently being printed, you will also see their progress in the UI
3. Paused
    - Set to jobs that were being printed, but the user has paused them
4. Cancelled
    - Set when a job is cancelled by a user 

::: warning
All jobs require a user to manually start them. See [Starting a job](/aura-connect/quickstart/#starting-a-print-job)
:::

## Sources and Files

A source (or a file), is .gcode file with an optional .auprojx file uploaded to Aura.Connect. These units are used to create [Jobs](#jobs) in Aura.Connect

## Job queue

Each printer has a job queue. When you create a job for some printer, it gets put into that printer's job queue. The first job in the queue will be displayed on the printer's screen. You can change the order of jobs for a printer in the [Job Inspector](/aura-connect/gui/#job-inspector)

## Telemetry

Is a collection of data sent by a printer, including:

1. Build plate temperature
2. Chamber temperature
3. Printer head temperature (for all print heads)
4. Fan speed (for each fan)
5. Material usage (for each extruder)
6. Printer head position

## Job archives

When a [Job](#jobs) is finished, an archive is created for it, containing the following data:

1. Job's [Source](#sources-and-files)
2. Job's printer
3. Job's creator (Aura.Connect user)
4. Time when job finished
5. Time when job started 

Job archives facilitate the calculation of company's statistics

## Printer commands

G-code that is sent to a printer is called a [Printer command](#printer-commands)

Printers are capable of receiving g-code commands remotely via the [Terminal](/aura-connect/gui/#terminal-interactive-control)