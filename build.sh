npm run build ## requires database
# make the entrypoint part of the build
CMD ["sh", "-c", "'npm run build && npm run start'"]
# cmd / entrypoint: npm run build && npm run start


