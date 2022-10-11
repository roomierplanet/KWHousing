#!/bin/bash
pm2 restart kwhousing --update-env
systemctl restart nginx